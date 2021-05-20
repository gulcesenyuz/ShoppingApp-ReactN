import React, { useState, useEffect } from 'react'
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';


export default function FetchSample() {
    const [categories, setcategories] = useState([]);

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/categories')
            .then((res) => res.json())
            .catch((error) => console.error(error))
            .then((categories) => {
                setcategories(categories);

            })


    }, [])



    return (
        <View>
            {
                categories.map((eachData) => (
                    <ListItem>
                        <ListItem.Content>
                            <ListItem.Title>{eachData.name}</ListItem.Title>
                            <ListItem.Subtitle>{eachData.description}</ListItem.Subtitle>

                        </ListItem.Content>
                    </ListItem>
                ))
            }


        </View>
    )

}


