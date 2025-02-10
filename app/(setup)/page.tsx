import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialProfile } from "@/lib/initial-profile";
import InitialModal from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await InitialProfile();

  if (!profile) {
    return redirect("/sign-in");
  }

  const server = await db.server.findFirst({
    where: { members: { some: { profileId: profile.id } } },
  });

  if (server) {
    return redirect(`/server/${server.id}`);
  }

  return <InitialModal />;
};

export default SetupPage;
