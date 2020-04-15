import React from "react";
import {Document, Font, Image, Page, StyleSheet, Text, View} from "@react-pdf/renderer";
import {Item} from "../BasicComponents/List";


Font.register({
    family: 'Lato Bold',
    src: 'http://localhost:3000/fonts/fonts/Lato/Lato-Bold.ttf',
});

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    page: {
        backgroundColor: "#ffffff"
    },
    section: {
        fontSize: 12,
        margin: 10,
        padding: 10,
        flexGrow: 1
    },
    movieContainer: {
        backgroundColor: "#f6f6f5",
        display: "flex",
        flexDirection: "row",
        padding: 5
    },
    movieDetails: {
        display: "flex",
        marginLeft: 5
    },
    movieTitle: {
        fontSize: 15,
        marginBottom: 10
    },
    movieOverview: {
        fontSize: 10
    },

    image: {
        width: '180',
        height: 'auto',
        alignSelf: 'center',
    },
    subtitle: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        width: 150,
        alignItems: "center",
        marginBottom: 12
    },
    rightAlignBold: {
        fontFamily: 'Lato Bold',
        textAlign: "right"
    },
    rightAlign: {
        textAlign: "right"
    },
    vote: {
        display: "flex",
        flexDirection: "row"
    },
    rating: {
        height: 10,
        width: 10
    },
    vote_pop: {
        fontSize: 10,
        padding: 2,
        backgroundColor: "#61C74F",
        color: "#fff"
    },
    vote_pop_text: {
        fontSize: 10,
        marginLeft: 4
    },
    overviewContainer: {
        minHeight: 110
    },
    detailsFooter: {
        display: "flex",
        flexDirection: "row"
    },
    lang: {
        fontSize: 8,
        fontWeight: 700
    },
    underline: {
        textDecoration: "underline",
    },
    vote_average: {
        fontSize: 8,
        marginLeft: 4,
        fontWeight: "bold"
    },
    column: {
        width: '50%' // is 50% of container width
    },
    footer: {
        marginTop: 10
    },
    logo: {
        width: '90',
        height: 'auto',
    }
});


export function PdfDocument(props: any) {
    let dName = "Voornaam Achternaam";
    let dAddr = "Straat nummer bus";
    let dCity = "Postcode, Stad";
    let pName = "Naam patient";
    let pAddr = "Straat nummer bus";
    let pCity = "Postcode, Stad";


    console.log("pdf props", props.data);
    return (

        <Document>
            <Page style={styles.page}>
                <View style={styles.section}>
                    <Image src="/Logo.png" style={styles.logo}/>
                    <View style={{borderBottomWidth: StyleSheet.hairlineWidth}}/>
                    <Text>
                        Heverlee, {new Date().toDateString()}
                    </Text>
                    <Text style={styles.rightAlignBold}>
                        Aan tandarts
                        {'\n'}
                        {dName}
                    </Text>
                    <Text style={styles.rightAlign}>
                        {dAddr}
                        {'\n'}
                        {dCity}
                    </Text>

                    <View style={styles.container}>
                        <View style={styles.column}>
                            <View style={styles.container}>
                                <View style={styles.column}>
                                    <Text style={styles.rightAlignBold}>Betreft:</Text>
                                </View>
                                <View style={styles.column}>
                                    <Text style={styles.rightAlignBold}>{pName}</Text>
                                    <Text style={styles.rightAlign}>{pAddr}</Text>
                                    <Text style={styles.rightAlign}>{pCity}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.column}>
                            <Image
                                src="/Person.jpeg"
                                style={styles.image}
                            />
                        </View>
                    </View>
                    <Text>
                        Geachte Collega,
                        {'\n\n'}
                        Dank voor het doorsturen van uw patiënt. Ik zag {pName} vandaag voor de bespreking van haar /
                        zijn orthodontisch behandelingsplan.
                    </Text>
                    <Text>
                        <Text style={styles.underline}>{'\n'}Diagnose:</Text>
                        {'\n'}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in arcu
                        cursus. Diam maecenas sed enim ut sem viverra. In metus vulputate eu scelerisque felis imperdiet
                        proin. Convallis tellus id interdum velit laoreet. In vitae turpis massa sed elementum tempus
                        egestas sed. Ut tortor pretium viverra suspendisse. Interdum velit laoreet id donec ultrices
                        tincidunt arcu non sodales. Risus viverra adipiscing at in tellus integer feugiat scelerisque
                        varius. Semper eget duis at tellus at urna condimentum mattis. Id ornare arcu odio ut sem nulla
                        pharetra diam sit. Est lorem ipsum dolor sit amet consectetur. </Text>
                    <Text>
                        <Text style={styles.underline}>
                            {'\n'}Behandelingsplan:
                        </Text>
                        {'\n'}

                    </Text>
                    <Item>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Bibendum neque egestas congue quisque egestas diam in arcu
                        cursus. Diam maecenas sed enim ut sem viverra. In metus vulputate eu scelerisque felis imperdiet
                        proin. Convallis tellus id interdum velit laoreet. In vitae turpis massa sed elementum tempus
                        egestas sed. Ut tortor pretium viverra suspendisse. Interdum velit laoreet id donec ultrices
                        tincidunt arcu non sodales. Risus viverra adipiscing at in tellus integer feugiat scelerisque
                        varius. Semper eget duis at tellus at urna condimentum mattis. Id ornare arcu odio ut sem nulla
                        pharetra diam sit. Est lorem ipsum dolor sit amet consectetur.
                    </Item>
                    <View style={styles.container}>
                        <View style={styles.column}>
                            <Text style={styles.footer}>
                                Vriendelijke groeten,
                                {'\n'}
                                {'\n'}
                                Naam
                                {'\n'}
                                Andere info
                            </Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={{...styles.footer, ...styles.rightAlign}}>
                                Straat Nummer
                                {'\n'}
                                Postcode Stad
                                {'\n'}
                                Telefoonnummer
                                {'\n'}
                                email
                                {'\n'}
                                website
                            </Text>
                        </View>
                    </View>

                </View>
                {/*{props.data*/}
                {/*    ? props.data.map((a: any, index: number) => {*/}
                {/*        return (*/}
                {/*            <View key={index} style={styles.movieContainer}>*/}
                {/*                */}
                {/*                <View style={styles.movieDetails}>*/}
                {/*                    <Text style={styles.movieTitle}>{a.title}</Text>*/}
                {/*                    <View style={styles.subtitle}>*/}
                {/*                        <View style={styles.vote}>*/}
                {/*                            <Image source="star.png" style={styles.rating} />*/}
                {/*                            <Text style={styles.vote_text}>{a.vote_count}</Text>*/}
                {/*                        </View>*/}
                {/*                        <View style={styles.vote}>*/}
                {/*                            <Text style={styles.vote_pop}>{a.popularity}</Text>*/}
                {/*                            <Text style={styles.vote_pop_text}>Popularity</Text>*/}
                {/*                        </View>*/}
                {/*                    </View>*/}
                {/*                    <View style={styles.overviewContainer}>*/}
                {/*                        <Text style={styles.movieOverview}>{a.overview}</Text>*/}
                {/*                    </View>*/}
                {/*                    <View style={styles.detailsFooter}>*/}
                {/*                        <Text style={styles.lang}>*/}
                {/*                            Language: {a.original_language.toUpperCase()}*/}
                {/*                        </Text>*/}
                {/*                        <Text style={styles.vote_average}>*/}
                {/*                            Average Votes: {a.vote_average}*/}
                {/*                        </Text>*/}
                {/*                    </View>*/}
                {/*                </View>*/}
                {/*            </View>*/}
                {/*        );*/}
                {/*    })*/}
                {/*    : ""}*/}
            </Page>
        </Document>
    );
}
