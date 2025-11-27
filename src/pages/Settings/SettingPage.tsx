import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfilePage from "./ProfilePage";
import BorrowPage from "./BorrowPage";
import ReviewPage from "./ReviewPage";
import { useSearchParams } from "react-router-dom";

const SettingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") ?? "profile"; // fallback

  return (
    <div>
      <Tabs defaultValue={type} className="w-full md:w-139">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="borrowed">Borrowed List</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfilePage />
        </TabsContent>
        <TabsContent value="borrowed">
          <BorrowPage />
        </TabsContent>
        <TabsContent value="reviews">
          <ReviewPage />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SettingPage;
