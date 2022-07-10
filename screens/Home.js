import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { COLORS, NFTData } from "../constants";
import NFTCard from "../components/NFTCard";
import { HomeHeader, FocusedStatusBar } from "../components";

// Home
const Home = () => {
  const [nftData, setNftData] = useState(NFTData);

  // handle search
  const handleSearch = (value) => {
    // check value length
    if (!value.length) return setNftData(NFTData);

    // filter searched data
    const filteredData = NFTData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    // set nft data
    if (filteredData.length) {
      setNftData(filteredData);
    } else {
      setNftData(NFTData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Status Bar */}
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            // render nft
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            // Header
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        {/* Background View */}
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
