import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useRef, FormEventHandler } from 'react';
import { format } from 'date-fns'; 

type CreateWorkoutSessionForm = {
    start_date ?: string;
    end_date   ?: string;
    type    ?: string;
    branch_id ?: string;
    
    
}
 
export default function Create() {
    
    const workoutSessionName = useRef<HTMLInputElement>(null);
    const { data, setData, errors, post, reset, processing, progress } = useForm<Required<CreateWorkoutSessionForm>>({ 
       start_date: '',
        end_date:   '',
        type:    '',
        branch_id: '',
        
    }); 
     const createWorkoutSession: FormEventHandler = (e) => {
        e.preventDefault();
 
        post(route('workoutSessions.store'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.start_date) {
                    reset('start_date');
                    workoutSessionName.current?.focus();
                }
            },
        });
    };
    

    return (
       <AuthenticatedLayout>
        
             <Head title="Create WorkoutSession" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={createWorkoutSession} className="space-y-6">

                    <div className="grid gap-2"> 
        <Label htmlFor="name">Start Date</Label>
 
            <Input
                id="start_date"
                value={data.start_date}
                onChange={(e) => setData('start_date', format(new Date(e.target.value), 'yyyy-MM-dd'))}
                className="mt-1 block w-full"
                type="date"
        />
 
            <InputError message={errors.start_date} />
        </div> 

                   <div className="grid gap-2"> 
        <Label htmlFor="name">End Date</Label>
 
           <Input
                        id="end_date"
                        value={data.end_date}
                        onChange={(e) => setData('end_date', format(new Date(e.target.value), 'yyyy-MM-dd'))}
                        className="mt-1 block w-full"
                        type="date"
             />
 
        <InputError message={errors.end_date} />
    </div> 

                    <div className="grid gap-2">
                        <Label htmlFor="type">WorkoutSession Type *</Label>
 
                        <Input
                            id="type"
                            ref={workoutSessionName}
                            value={data.type}
                            onChange={(e) => setData('type', e.target.value)}
                            className="mt-1 block w-full"
                            name='type'
                            
                        />
                        <InputError message={errors.type} />
                    </div>

                    {/* <div className="grid gap-2">
                        <Label htmlFor="type">WorkoutSession Branch *</Label>
 
                        <Input
                            id="branch_id"
                            ref={workoutSessionName}
                            value={data.branch_id}
                            onChange={(e) => setData('branch_id', e.target.value)}
                            className="mt-1 block w-full"
                            name='branch_id'
                            
                        />
                        <InputError message={errors.branch_id} />
                    </div> */}


                   
 
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Create WorkoutSession</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}