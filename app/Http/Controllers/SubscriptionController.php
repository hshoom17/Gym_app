<?php

namespace App\Http\Controllers;

use App\Enums\UserStatus;
use App\Http\Requests\Subscription\StoreSubscriptionRequest;
use App\Http\Requests\Subscription\UpdateSubscriptionRequest;
use App\Models\Subscription;

use Inertia\Inertia;

class SubscriptionController extends Controller

    {
    public function index()
    {

        $subscription=Subscription::all();
        return Inertia::render('Subscriptions/Index', [
            'subscriptions' => $subscription, 
            
        ]);
    }
 
    public function create()
    {   
        $status=UserStatus::cases();
        // dd($status);
        
        return Inertia::render('Subscriptions/Create',[
            'status' => $status,
        ]);
    }

    public function store(StoreSubscriptionRequest $request)
    {   
        Subscription::create($request->validated());
        
        return redirect()->route('subscriptions.index');
    }

 
    public function edit(Subscription $subscription)
    {   
        // $subscription->load('user');
        return Inertia::render('Subscriptions/Edit', [
            'subscription' => $subscription,

            
        ]);
    }
 
    public function update(UpdateSubscriptionRequest $request, Subscription $subscription)
    {
        
        $subscription->update($request->validated());
        
        return redirect()->route('subscriptions.index');
    }
 
    public function destroy(Subscription $subscription)
    {
        $subscription->delete();
 
        return redirect()->route('subscriptions.index');
    }
}



