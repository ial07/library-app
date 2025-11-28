import { Button } from "@/components/ui/button";
import { useMe } from "@/features/me/hooks/useMe";
import React from "react";

const ProfilePage: React.FC = () => {
  const { data, isLoading, isError, error } = useMe();

  if (isError) return <span>{error.message}</span>;
  return (
    <div className="mt-4 md:mt-6">
      <h1 className="display-xs-bold md:display-sm-bold mb-4 md:mb-6">
        Profile
      </h1>

      {!isLoading && (
        <div className="p-4 md:p-5 rounded-2xl shadow-sm border mb-14.5 md:mb-27.5">
          <img
            src="/images/author.png"
            alt="profilepic"
            className="size-16 rounded-full mb-3"
          />
          <div className="flex-between mb-2">
            <span className="text-sm-medium md:text-sm-bold">Name</span>
            <span className="text-sm-bold md:text-sm-bold">
              {data?.profile.name}
            </span>
          </div>
          <div className="flex-between mb-2">
            <span className="text-sm-medium md:text-sm-bold">Email</span>
            <span className="text-sm-bold md:text-sm-bold">
              {data?.profile.email}
            </span>
          </div>
          <div className="flex-between mb-4 md:mb-6">
            <span className="text-sm-medium md:text-sm-bold">
              Nomor Handphone
            </span>
            <span className="text-sm-bold md:text-sm-bold">
              {data?.profile.phoneNumber ?? "-"}
            </span>
          </div>

          <Button className="w-full">Update Profile</Button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
