-- CreateTable
CREATE TABLE "user_has_profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_id" INTEGER NOT NULL,
    "profile_id" INTEGER NOT NULL,
    CONSTRAINT "user_has_profile_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "user_has_profile_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "Profile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
