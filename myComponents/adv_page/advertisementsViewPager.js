import PagerView from "react-native-pager-view";
import {Dimensions,StyleSheet, Image, TouchableOpacity, View} from "react-native";
import {useEffect, useRef, useState} from "react";
import {db} from "../../firebaseConfig";
import {collection,getDocs} from "firebase/firestore";


export default function AdvertisementsViewPager() {

    // images
    const [advertisements, setAdvertisements] = useState([]);

    // page number
    const [pageNumber, setPageNumber] = useState(0);

    // pager ref
    const pagerRef = useRef(null);

    // handle page change
    const handlePageChange = pageNumber => {
        setPageNumber(pageNumber);
        pagerRef.current.setPage(pageNumber);
    };


    useEffect(async () => {
        // fetch advertisement from firebase database
        // create a reference to the advertisements collection
        const advertisementsCol = await collection(db,"advertisements");
        // get all documents from advertisements collection
        const advertisementsSnapshot = await getDocs(advertisementsCol);
        // get all documents data
        const advertisementsList = advertisementsSnapshot.docs.map(doc => doc.data());
        // set advertisements
        setAdvertisements(advertisementsList);
    },[]);

    return (
    <>
        {/* viewPager */}
        <PagerView
            style={styles.viewPager}
            initialPage={0}
            ref={pagerRef}
            onPageScroll={(event) => {
                setPageNumber(event.nativeEvent.position);
            }}
        >
            {

                advertisements.map((image) => {
                    return (
                        <View style={styles.page} key={image._id}>
                            <Image
                                source={{uri: image.imageURI}}
                                style={{width: Dimensions.get("window").width, height: "100%"}}
                            />
                        </View>
                    );
                })
            }
        </PagerView>

        {/* change pages */}
        <View style={styles.navigation}>
            {
                advertisements.map((image, index) => {
                    return (
                        <TouchableOpacity key={image._id} onPress={() => handlePageChange(index)}>
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: 15,
                                backgroundColor: index === pageNumber ? "#518379" : "#E0E0E0"
                            }}>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        alignSelf: "stretch",
        marginLeft: 10,
        marginRight: 10
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 30
    }
});

