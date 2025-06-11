<?php

namespace App\Http\Controllers;

use App\Enums\UserRoles;
use App\Enums\UserStatus;
use App\Http\Requests\Coach\StoreCoachRequest;
use App\Http\Requests\Coach\UpdateCoachRequest;
use App\Models\Coach;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class CoachController extends Controller

    {
    public function index()
    {

        $coach=Coach::with(['user:id,email,phone,en_name','branch','media'])->get();
        // $branches=Branch::select('id','en_name')->get();
        // dd($coach->toArray());
        return Inertia::render('Coaches/Index', [
            'coaches' => $coach, 
            // 'branches' => $branches,
        ]);
    }
 
    public function create()
    {
        return Inertia::render('Coaches/Create');
    }

    public function store(StoreCoachRequest $request)
    {   
        $user =User::create([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'dial_cod' => $request->dial_cod,
            'phone' => $request->phone,
            'role' => UserRoles::COACH,
            'status' => UserStatus::ACTIVE,

        ]);
        $coach= $user->coach()->create(['CV'=> 'gg','branch_id'=>1]);


        
        if ($request->hasFile('CV')) { 
        $coach->addMedia($request->file('CV'))->toMediaCollection(); 
        }
    
        return redirect()->route('coaches.index');
    }

 
    public function edit(Coach $coach)
    {   
        $coach->load('user');
        return Inertia::render('Coaches/Edit', [
            'coach' => $coach,

        ]);
    }
 
    public function update(UpdateCoachRequest $request, Coach $coach)
    {
        
        $coach->user->update($request->validated());
        
        return redirect()->route('coaches.index');
    }
 
    public function destroy(Coach $coach)
    {
        $coach->delete();
 
        return redirect()->route('coaches.index');
    }
}


