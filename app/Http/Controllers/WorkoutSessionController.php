<?php

namespace App\Http\Controllers;


use App\Http\Requests\WorkoutSession\StoreWorkoutSessionRequest;
use App\Http\Requests\WorkoutSession\UpdateWorkoutSessionRequest;
use App\Models\WorkoutSession;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use App\Models\Coach;

class WorkoutSessionController extends Controller

    {
    public function index()
    {

        $workoutSession=WorkoutSession::with([
            'coach:id,user_id',
            'coach.user:id,en_name',
            
            ])->get();
        // dd( $workoutSession->toArray());
        return Inertia::render('WorkoutSessions/Index', [
            'workoutSessions' => $workoutSession, 
  
        ]);
    }
 
    public function create()
    {
        return Inertia::render('WorkoutSessions/Create');
    }

    public function store(StoreWorkoutSessionRequest $request)
    {   
        
        WorkoutSession::create($request->validated());


        
        // if ($request->hasFile('CV')) { 
        // $customer->addMedia($request->file('CV'))->toMediaCollection(); 
        // }
    
        return redirect()->route('workoutSessions.index');
    }

 
    public function edit(WorkoutSession $workoutSession)
    {   
        
        return Inertia::render('WorkoutSessions/Edit', [
            'workoutSession' => $workoutSession,

        ]);
    }
 
    public function update(UpdateWorkoutSessionRequest $request, WorkoutSession $workoutSession)
    {
        
        $workoutSession->update($request->validated());
        
        return redirect()->route('workoutSessions.index');
    }
 
    public function destroy(WorkoutSession $workoutSession)
    {
        $workoutSession->delete();
 
        return redirect()->route('workoutSessions.index');
    }
}



