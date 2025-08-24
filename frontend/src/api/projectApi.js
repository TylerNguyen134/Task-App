/**
 * Project API utility functions
 * 
 * This file contains handler functions for consuming backend API endpoints related to project data.
 * 
 * Functions:
 *   - GET(request): Fetches all project objects from the backend.
 * 
 * Usage:
 *   These functions are imported and used in multiple react components.
 * 
 * Notes:
 *   - The backend endpoint is assumed to be "/project".
 *   - Adjust endpoint if backend route changes.
 *   - Returns a Response object (axiosResponse) with JSON data or an error message.
 */

import axios from "axios";

// list (GET all) handler for project data
export async function GET() {
    try {
        const axiosResponse = await axios.get("http://localhost:3000/project");
        return axiosResponse.data; // Just return the data
    } catch (error) {
        throw error; // Let the caller handle the error
    }
}