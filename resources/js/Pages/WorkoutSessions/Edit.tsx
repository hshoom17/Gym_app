import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Checkbox } from '@/Components/ui/checkbox';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { type WorkoutSession } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
import { format } from 'date-fns'; 
 
type EditWorkoutSessionForm = {
    start_date ?: string;
    end_date   ?: string;
    
    
    
    
};
 
export default function Edit({ workoutSession }: { workoutSession: WorkoutSession }) {
    const workoutSessionName = useRef<HTMLInputElement>(null);
 
    const { data, setData, errors, put, reset, processing } = useForm<Required<EditWorkoutSessionForm>>({
        start_date: workoutSession.start_date,
        end_date:workoutSession.end_date,
        

        
    });
 
    const editWorkoutSession: FormEventHandler = (e) => {
        e.preventDefault();
 
        put(route('workoutSessions.update', workoutSession.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.name) {
                    reset('start_date');
                    workoutSessionName.current?.focus();
                }
            },
        });
    };
    return (
        <AuthenticatedLayout>
            <Head title="Edit WorkoutSession" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={editWorkoutSession} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">WorkoutSession Start Date</Label>
 
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
                        <Label htmlFor="name">WorkoutSession End Date</Label>
 
                       <Input
                                       id="end_date"
                                       value={data.end_date}
                                       onChange={(e) => setData('end_date', format(new Date(e.target.value), 'yyyy-MM-dd'))}
                                       className="mt-1 block w-full"
                                       type="date"
                               />
                        
                                   <InputError message={errors.end_date} />
 
                        <InputError message={errors.end_date} />
                    </div>

                     
                    
 
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Update WorkoutSession</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}