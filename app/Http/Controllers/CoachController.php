<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCoachRequest;
use App\Http\Requests\UpdateCoachRequest;
use App\Models\Coach;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CoachController extends Controller

    {
      public function index()
    {
        return Inertia::render('coaches/Index', [
            'coaches' => Coach::all(),
        ]);
    }
 
    public function create()
    {
        return Inertia::render('coaches/Create');
    }
 
    public function store(StoreCoachRequest $request)
    {
        Coach::create($request->validated());
 
        return redirect()->route('coaches.index');
    }
 
    public function edit(Coach $coach)
    {
        return Inertia::render('coaches/Edit', [
            'coach' => $coach,
        ]);
    }
 
    public function update(UpdateCoachRequest $request, Coach $coach)
    {
        $coach->update($request->validated());
 
        return redirect()->route('coaches.index');
    }
 
    public function destroy(Coach $coach)
    {
        $coach->delete();
 
        return redirect()->route('coaches.index');
    }
}


