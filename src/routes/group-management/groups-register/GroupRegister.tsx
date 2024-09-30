import { RegistrationContextProvider } from "./core/RegistrationContext";
import GroupCard from "./group-card/GroupCard";
import GroupRegisterForm from "./group-register-form/GroupRegisterForm";

export default function GroupRegister() {
    return (
        <RegistrationContextProvider>
            <section className="w-full min-h-screen p-4 bg-mainBg">
                <div className="  mb-6">
                    <h1 className="text-2xl font-medium">New Group</h1>
                    <p className="font-medium text-textGray">
                        Register new group data
                    </p>
                </div>
                <div>
                    <GroupRegisterForm />
                    <GroupCard />
                </div>
            </section>
        </RegistrationContextProvider>
    );
}
