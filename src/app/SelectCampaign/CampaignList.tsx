import { View, Text, FlatList, Modal, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { deleteCharacter } from "../../services/characterService";
import AppContext from "../../contexts/AppContext";
import EditButton from "../../components/EditButton";
import DeleteButton from "../../components/DeleteButton";
import TouchableTitle from "../../components/TouchableTitle";
import CardFramed from "../../components/containers/CardFramed";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/Navigation";
import ImageButton from "../../components/ImageButton";
import { editCampaign, getCampaignsByDm } from "../../services/campaignService";
import { Campaign } from "../../types/Campaign";
import DateTimePicker from "@react-native-community/datetimepicker";

type Props = NativeStackScreenProps<RootStackParamList, "SelectCharacter">;

export default function CampaignList({ navigation }: Props) {
  const [campaigns, setCampaigns] = useState();
  const [activeCampaign, setActiveCampaign] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const app = useContext(AppContext);

  const fetchCampaigns = async () => {
    try {
      const data = await getCampaignsByDm(app?.user.id!);
      setCampaigns(data.campaigns);
    } catch (error) {
      console.error("Error fetching campaigns:", error);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const handleView = () => {
    // navigation.navigate("ViewCharacter", { character: campaign });
  };

  const handleEdit = (id: number) => {
    setActiveCampaign(id);
    setShowEditModal(!showEditModal);
  };

  const handleDelete = (id: number) => {
    setActiveCampaign(id);
    setShowDeleteModal(!showDeleteModal);
  };

  const handleAdd = () => {
    // resetCampaign();
    // navigation.navigate("CreateCharacter");
  };

  const getNextSessionString = (next_session: string | Date | undefined) => {
    if (!next_session) {
      return "No session scheduled";
    }
    const date = new Date(next_session);
    return isNaN(date.getTime()) ? "Invalid date" : date.toLocaleDateString();
  };

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setSelectedDate(selectedDate);
    }
  };

  const handleSave = async () => {
    const nextDayDate = new Date(selectedDate);
    nextDayDate.setDate(nextDayDate.getDate() + 1); // Adiciona 1 dia

    const formattedDate = nextDayDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const newDate = { next_session: formattedDate };
    await editCampaign(newDate, activeCampaign!);
    setShowEditModal(false);
    navigation.reset({
      index: 0,
      routes: [{ name: "SelectCampaign" }],
    });
  };

  const renderItem = ({ item }: { item: Campaign }) => (
    <>
      <TouchableTitle
        title={`${item.name}`}
        className="px-1"
        onPress={() => handleView()}
      />
      <CardFramed>
        <View className="flex justify-between mb-4">
          <View>
            <Text className="text-lg">Campaign:</Text>
            <Text className="text-lg">Name: {item.name}</Text>
            <Text className="text-lg">
              Next Session:{" "}
              {item.next_session
                ? getNextSessionString(item.next_session)
                : "No session scheduled"}
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-between items-center">
          <EditButton className="px-1" onPress={() => handleEdit(item.id!)} />
          <DeleteButton onPress={() => handleDelete(item.id!)} />
        </View>
      </CardFramed>
    </>
  );

  return (
    <View>
      <FlatList
        className="mx-8 h-4/6"
        data={campaigns}
        renderItem={renderItem}
      />
      <ImageButton
        imageName="add"
        className="self-center"
        onPress={handleAdd}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeleteModal}
        onRequestClose={() => {
          setShowDeleteModal(!showDeleteModal);
        }}
      >
        <View className="flex-1 justify-center items-center bg-gray-900/60 p-4">
          <View className="bg-stone-700/80 p-8 rounded-xl shadow-lg w-80">
            <Text className="text-2xl italic font-semibold text-white mb-8 text-center">
              I don't think there will be a return journey, Mr. Frodo!
            </Text>
            <Text className="text-lg font-semibold text-white mb-4 text-center">
              <Text>You are about to delete your character, </Text>
              <Text className="text-red-500">you can't undo this action.</Text>
            </Text>
            <Text className="text-lg font-bold text-white mb-4 text-center">
              Are you sure about this?
            </Text>
            <Pressable
              className="bg-blue-500 p-2 rounded self-center w-full"
              onPress={() => setShowDeleteModal(!showDeleteModal)}
            >
              <Text className="text-white text-lg text-center font-bold">
                Cancel
              </Text>
            </Pressable>
            <Pressable
              className="bg-red-500 p-2 text-lg rounded self-center w-full mt-20"
              onPress={async () => {
                await deleteCharacter(activeCampaign!);
                setShowDeleteModal(!showDeleteModal);
                navigation.reset({
                  index: 0,
                  routes: [{ name: "SelectCharacter" }],
                });
              }}
            >
              <Text className="text-white text-center font-black">DELETE</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="fade"
        transparent={true}
        visible={showEditModal}
        onRequestClose={() => {
          setShowEditModal(!showEditModal);
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: 16,
              borderRadius: 8,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 16,
                color: "white",
              }}
            >
              When is the next session?
            </Text>
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
              style={{
                width: "100%",
                marginBottom: 16,
                backgroundColor: "#CFBE86",
              }}
            />
            <Pressable
              style={{
                backgroundColor: "green",
                padding: 12,
                borderRadius: 8,
                width: "100%",
                marginBottom: 8,
              }}
              onPress={handleSave}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                SAVE
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "blue",
                padding: 12,
                borderRadius: 8,
                width: "100%",
              }}
              onPress={() => setShowEditModal(false)}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                CANCEL
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
