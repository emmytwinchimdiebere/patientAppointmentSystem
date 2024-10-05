/** @type {import('next').NextConfig} */
const nextConfig = {

    env: {
        PROJECT_ID:process.env.NEXT_PUBLIC_PROJECTID,
        API_KEY:process.env.APIKEY,
        DATABASE_ID:process.env.NEXT_PUBLIC_DATABASEID,
        PATIENT_COLLECTION_ID:process.env.NEXT_PUBLIC_PATIENT_COLLECTIONID,
        DOCTOR_COLLECTION_ID:process.env.NEXT_PUBLIC_DOCTOR_COLLECTIOND,
        APPOINTMENT_COLLECTION_ID:process.env.NEXT_PUBLIC_APPOINTMENT_COLLLECTIONID,
        BUCKET_ID:process.env.NEXT_PUBLIC_BUCKETID,
        ENDPOINT:process.env.NEXT_PUBLIC_ENDPOINT
    }
};

export default nextConfig;
