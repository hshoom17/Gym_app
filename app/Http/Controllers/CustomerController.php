<?php

namespace App\Http\Controllers;

use App\Enums\UserRoles;
use App\Enums\UserStatus;
use App\Http\Requests\Customer\StoreCustomerRequest;
use App\Http\Requests\Customer\UpdateCustomerRequest;
use App\Http\Resources\CoachResource;
use App\Models\Branch;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class CustomerController extends Controller

    {
    public function index()
    {

        $customer=Customer::with(['user:id,email,phone,en_name',])->get();
        // $branches=Branch::select('id','en_name')->get();
        // dd($customer->toArray());
        return Inertia::render('Customers/Index', [
            'customers' => $customer, 
            // 'branches' => $branches,
        ]);
    }
 
    public function create()
    {
        return Inertia::render('Customers/Create');
    }

    public function store(StoreCustomerRequest $request)
    {   
        $user =User::create([
            'en_name' => $request->en_name,
            'ar_name' => $request->ar_name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'dial_cod' => $request->dial_cod,
            'phone' => $request->phone,
            'role' => UserRoles::CUSTOMER,
            'status' => UserStatus::ACTIVE->value,

        ]);
        $customer= $user->customer()->create();


        
        // if ($request->hasFile('CV')) { 
        // $customer->addMedia($request->file('CV'))->toMediaCollection(); 
        // }
    
        return redirect()->route('customers.index');
    }

 
    public function edit(Customer $customer)
    {   
        $customer->load('user');
        return Inertia::render('Customers/Edit', [
            'customer' => $customer,

        ]);
    }
 
    public function update(UpdateCustomerRequest $request, Customer $customer)
    {
        
        $customer->user->update($request->validated());
        
        return redirect()->route('customers.index');
    }
 
    public function destroy(Customer $customer)
    {
        $customer->delete();
 
        return redirect()->route('customers.index');
    }
}



