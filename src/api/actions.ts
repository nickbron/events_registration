// import { redirect } from 'next/navigation'
// import { createClient } from "@/utils/supabase/server";
import prisma from '@/lib/prisma'

// export async function addRegistration(idEvent: any, formData: FormData) {
//   const supabase = createClient();
//   // const {
//   //   duser: { user },
//   // } = await supabase.auth.getUser();
//   // console.log("USERID:", user);
//   const data = {
//     firstName: formData.get("firstName") as string,
//     lastName: formData.get("lastName") as string,
//     email: formData.get("email") as string,
//     birthday: formData.get("birthday"),
//     whereKnow: formData.get("whereKnow") as string,
//     id_event: idEvent,
//   };
//   console.log("DATA:", data);

//   const { error } = await supabase.from("UserRegistration").insert(data);
//   redirect("/");

//   if (error) {
//     redirect("/error");
//   }
// }

export async function getEvents() {
    // const supabase = createClient();

    // const { data, error } = await supabase.from("Events").select("*");
    // console.log("data:", data);
    // if (error) {
    //   redirect("/error");
    // }
    const data = await prisma.events.findMany({
        orderBy: {
            eventDate: 'desc',
        },
    })
    console.log('DATAprisma:', data)
    return data
}

// export async function getParticipants(idEvent: any) {
//   const supabase = createClient();

//   const { data, error } = await supabase
//     .from("UserRegistration")
//     .select("*")
//     .in("id_event", [idEvent])
//     .order("created", { ascending: false });

//   console.log("DAAAAA", data);
//   if (error) {
//     redirect("/error");
//   }
//   return { data, error };
// }
