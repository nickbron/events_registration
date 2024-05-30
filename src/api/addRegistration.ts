import { redirect } from 'next/navigation'

export async function addRegistration(idEvent: string, formData: FormData) {
    //   const supabase = createClient();
    // const {
    //   duser: { user },
    // } = await supabase.auth.getUser();
    // console.log("USERID:", user);
    const data = {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        birthday: formData.get('birthday'),
        whereKnow: formData.get('whereKnow') as string,
        id_event: idEvent,
    }
    console.log('DATA:', data)

    //   const { error } = await supabase.from("UserRegistration").insert(data);
    redirect('/')

    //   if (error) {
    //     redirect("/error");
    //   }
}
