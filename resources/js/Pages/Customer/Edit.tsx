import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Checkbox } from '@/Components/ui/checkbox';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { type Coach } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
 
type EditCoachForm = {
    en_name?: string;
    
    
};
 
export default function Edit({ coach }: { coach: Coach }) {
    const coachName = useRef<HTMLInputElement>(null);
 
    const { data, setData, errors, put, reset, processing } = useForm<Required<EditCoachForm>>({
        en_name: coach.user.en_name,
        
    });
 
    const editCoach: FormEventHandler = (e) => {
        e.preventDefault();
 
        put(route('coaches.update', coach.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.name) {
                    reset('en_name');
                    coachName.current?.focus();
                }
            },
        });
    };
    return (
        <AuthenticatedLayout>
            <Head title="Edit Coach" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={editCoach} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Coach English Name</Label>
 
                        <Input
                            id="name"
                            ref={coachName}
                            value={data.en_name}
                            onChange={(e) => setData('en_name', e.target.value)}
                            className="mt-1 block w-full"
                        />
 
                        <InputError message={errors.en_name} />
                    </div>
                    
 
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Update Coach</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}