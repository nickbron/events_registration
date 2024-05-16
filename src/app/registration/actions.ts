"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function addRegistration(idEvent: any, formData: FormData) {
  const supabase = createClient();
  const data = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    birthday: formData.get("birthday"),
    whereKnow: formData.get("whereKnow") as string,
    id_event: idEvent,
  };
  console.log("DATA:", data);

  const { error } = await supabase.from("UserRegistration").insert(data);
  redirect("/");

  if (error) {
    redirect("/error");
  }
}

export async function getEvents() {
  const supabase = createClient();

  const { data, error } = await supabase.from("Events").select("*");

  if (error) {
    redirect("/error");
  }
  return { data, error };
}

export async function getParticipants(idEvent: any) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("UserRegistration")
    .select("*")
    .in("id_event", [idEvent])
    .order("created", { ascending: false });

  console.log("DAAAAA", data);
  if (error) {
    redirect("/error");
  }
  return { data, error };
}
