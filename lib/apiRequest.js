import { useRouter } from "next/router";
import toast from  "react-hot-toast";


export async function makePutRequest(setLoading, endpoint, data, resourceName, reset,redirect) {
   

    try {
        setLoading(true);
        
        // Ensure the BASE URL is correctly formatted
        let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl) {
            console.error("NEXT_PUBLIC_BASE_URL is not defined.");
            return;
        }

        // Remove extra quotes and spaces if they exist
        baseUrl = baseUrl.trim();

        // Ensure proper URL formatting
        const apiUrl = `${baseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

        console.log("API Request URL:", apiUrl); // Debugging line

        const response = await fetch(apiUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setLoading(false);
            toast.success(`${resourceName} created successfully`);
            reset();
            redirect();
        } else {
            setLoading(false);
            if (response.status === 409) {
                toast.error("The given warehouse stock is not enough");
            } else {
                toast.error("Something went wrong");
            }
        }
    } catch (error) {
        setLoading(false);
        console.error("Fetch Error:", error);
    }
}


export async function makePostRequest(setLoading, endpoint, data, resourceName, reset,redirect) {
   

    try {
        setLoading(true);
        
        // Ensure the BASE URL is correctly formatted
        let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
        if (!baseUrl) {
            console.error("NEXT_PUBLIC_BASE_URL is not defined.");
            return;
        }

        // Remove extra quotes and spaces if they exist
        baseUrl = baseUrl.trim();

        // Ensure proper URL formatting
        const apiUrl = `${baseUrl.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;

        console.log("API Request URL:", apiUrl); // Debugging line

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setLoading(false);
            toast.success(`${resourceName} created successfully`);
            reset();
            redirect();
        } else {
            setLoading(false);
            if (response.status === 409) {
                toast.error("The given warehouse stock is not enough");
            } else {
                toast.error("Something went wrong");
            }
        }
    } catch (error) {
        setLoading(false);
        console.error("Fetch Error:", error);
    }
}
