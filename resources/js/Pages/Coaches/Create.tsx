import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useRef, FormEventHandler } from 'react';

type CreateCoachForm = {
    en_name?: string;
    ar_name?: string;
    email?: string;
    password?: string;
    dial_cod?: string;
    phone?: string;
    role?: string;
    status?: string;
    CV?: string, 
    branch?: string,
    
}
 
export default function Create() {
    
    const coachName = useRef<HTMLInputElement>(null);
    const { data, setData, errors, post, reset, processing, progress } = useForm<Required<CreateCoachForm>>({ 
        en_name: '', 
        ar_name:'',
        email:'',
        password:'',
        dial_cod:'' ,
        phone:'' ,
        role:'' ,
        status:'' ,
        CV: '', 
        branch:''
    }); 
     const createCoach: FormEventHandler = (e) => {
        e.preventDefault();
 
        post(route('coaches.store'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.en_name) {
                    reset('en_name');
                    coachName.current?.focus();
                }
            },
        });
    };
    

    return (
       <AuthenticatedLayout>
        
             <Head title="Create Coach" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={createCoach} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="en_name">Coach English Name *</Label>
 
                        <Input
                            id="en_name"
                            ref={coachName}
                            value={data.en_name}
                            onChange={(e) => setData('en_name', e.target.value)}
                            className="mt-1 block w-full"
                            name='en_name'
                            required
                        />
                        <InputError message={errors.en_name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="ar_name">Coach Arabic Name *</Label>
 
                        <Input
                            id="ar_name"
                            ref={coachName}
                            value={data.ar_name}
                            onChange={(e) => setData('ar_name', e.target.value)}
                            className="mt-1 block w-full"
                            name='ar_name'
                            required
                        />
                        <InputError message={errors.ar_name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Coach Email *</Label>
 
                        <Input
                            id="email"
                            ref={coachName}
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            className="mt-1 block w-full"
                            name='email'
                            required
                        />
                        <InputError message={errors.en_name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Coach password *</Label>
 
                        <Input
                            id="password"
                            ref={coachName}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-full"
                            name='password'
                            required
                        />
                        <InputError message={errors.en_name} />
                    </div>

                    <div className="grid gap-2">
                     <Label htmlFor="CV">CV</Label>
 
                            <Input
                                id="CV"
                                onChange={(e) => setData('CV', e.target.files[0])}
                                className="mt-1 block w-full"
                                type="file"
                            />
                        
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                        
                            <InputError message={errors.CV} />
                        </div>

                        {/* <div className="grid gap-2">
                        <Label htmlFor="branch">Coach branch *</Label>
 
                        <Input
                            id="branch"
                            ref={coachName}
                            value={data.branch}
                            onChange={(e) => setData('branch', e.target.value)}
                            className="mt-1 block w-full"
                            name='branch'
                            required
                        />
                        <InputError message={errors.branch} />
                    </div> */}
 
                        

                  
 
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Create Coach</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}