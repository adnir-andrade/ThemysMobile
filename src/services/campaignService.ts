import { Campaign } from "../types/Campaign";
import api from "./api";
import { getHeader } from "./authService";

export const getCampaigns = async () => {
  try {
    const authHeader = await getHeader();
    const response = await api.get("/campaigns", authHeader);

    return response.data;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    throw error;
  }
};

export const getCampaignById = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.get(`/campaigns/${id}`, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error fetching campaign:", error);
    throw error;
  }
};

export const createCampaign = async (campaignData: Campaign) => {
  try {
    const authHeader = await getHeader();
    const response = await api.post(
      "/campaigns",
      { campaign: campaignData },
      authHeader
    );

    return response.data;
  } catch (error) {
    console.error("Error creating Campaign:", error);
    throw error;
  }
};

export const editCampaign = async (
  campaignData: Partial<Campaign>,
  id: number
) => {
  try {
    const authHeader = await getHeader();
    const response = await api.put(
      `/campaigns/${id}`,
      { campaign: campaignData },
      authHeader
    );

    return response.data;
  } catch (error) {
    console.error("Error editing Campaign:", error);
    throw error;
  }
};

export const deleteCampaign = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.delete(`/campaigns/${id}`, authHeader);

    return response.data;
  } catch (error) {
    console.error("Error deleting Campaign:", error);
    throw error;
  }
};

export const getCampaignsByDm = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.get(`/campaigns/by_dm/${id}`, authHeader);
    return response.data;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    throw error;
  }
};

export const getPlayersByCampaign = async (id: number) => {
  try {
    const authHeader = await getHeader();
    const response = await api.get(
      `/campaigns_players/players_by_campaign/${id}`,
      authHeader
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching players:", error);
    throw error;
  }
};
