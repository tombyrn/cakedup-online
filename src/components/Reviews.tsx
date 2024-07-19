import { Avatar, Grid, Paper } from "@mui/material";

const reviews = [
    {
        name:'Joanna Caccavo',
        review:'Best cupcakes I’ve ever had! To give some context, my father owned a bakery company in the 80s and 90s, and I grew up with access to high-quality baked goods, so I know what amazing-quality cake tastes like. Not only are the cupcakes beautiful, but the cake and buttercream Caked Up uses are absolutely delicious!',
        stars: 5,
        photo:'/reviews/jc.jpg'
    },
    {
        name:'Serena J',
        review:'After much research, I finally decided to contact Caked Up Cafe. This was a great choice! This place is my new favorite place for anything cakes and cupcakes. Denise did a fantastic job on the Little Man cake. It was a big hit at the baby shower and it tasted so delicious. I had the strawberry filling on the top layer and the bottom layer was oreo. It was fantastic all around!',
        stars: 5,
        photo:'/reviews/sj.jpg'
    },
    {
        name:'Colleen D',
        review:'Wow! Caked Up Cafe made my daughter’s birthday cake this weekend. It was nothing short of amazing. The detailing was superb.  The sugar work was outstanding. The cake was just so beautiful that it broke my heart to cut it. Besides looking amazing- it was delicious.  We went with the chocolate cake with Oreo filling.',
        stars: 5,
        photo:'/reviews/cd.jpg'
    },
    {
        name:'Aman Brown',
        review:'Caked Up is absolute perfection. After looking at different places for the perfect princess cake for our daughters first birthday, it was refreshing meeting with Denise. She went over every little detail and gave wonderful suggestions. The finished result was a masterpiece. Everyone talked about how beautiful and tasty the cake was. Even though we live about an hour from Caked Up, we plan to use them for all of our future cakes. Love them!!',
        stars: 5,
        photo:'/reviews/ab.jpg'
    },
    {
        name:'Joanna Caccavo',
        review:'Best cupcakes I’ve ever had! To give some context, my father owned a bakery company in the 80s and 90s, and I grew up with access to high-quality baked goods, so I know what amazing-quality cake tastes like. Not only are the cupcakes beautiful, but the cake and buttercream Caked Up uses are absolutely delicious!',
        stars: 5,
        photo:'/reviews/jc.jpg'
    },
    {
        name:'Lauren Kane',
        review:'Caked up is truly just amazing! From service to food to price. I can’t say enough good things about them!!',
        stars: 5,
        photo:'/reviews/lk.jpg'
    },
    {
        name:'Brett Eidman',
        review:'The best cupcakes and cakes anywhere. My daughter’s engagement cake was killer! Thanks so much for the amazing job.',
        stars: 5,
        photo:'/reviews/be.jpg'
    },
    {
        name:'Melissa McQuade',
        review:'Best cupcakes around!! Always fresh, beautifully decorated, and they all taste amazing!!!',
        stars: 5,
        photo:'/reviews/mm.jpg'
    },
    {
        name:'Diana Murray',
        review:'Caked up is fantastic. This now our second cake with them and each time the cake is not only gorgeous but delicious! Denise worked with me to create my vision and I was beyond thrilled at my baby shower and our daughter’s christening. Highly recommend',
        stars: 5,
        photo:'/reviews/dm.jpg'
    },
    {
        name:'Brittany Ann Loniewski',
        review:'You guys impress me and my family every time we get a cake from you. We have been using you for every event now for 3 years and we are always amazed. The latest cake was for our baby girls smash cake on her first birthday. It not only looked amazing, it tasted phenomenal.',
        stars: 5,
        photo:'/reviews/bal.jpg'
    },
    {
        name:'Francesca Goneconti Monaco',
        review:'My favorite cupcakes in the area (always fresh and unique flavors) – and I’ve honestly tried the cupcakes at almost every bakery around. I’ve also ordered a few custom cakes that have turned out beautiful!',
        stars: 5,
        photo:'/reviews/fgm.jpg'
    },
]

export default function Reviews() {
    return (
        <section className="m-8 h-96 flex justify-start items-start text-center overflow-auto">

              {reviews.map((r, i) => (

                    <Paper key={i} className="mx-3 p-8 min-w-[528px]" elevation={2}>
                        <Grid container spacing={1} direction="column" justifyContent="center" alignContent="center">
                            <Grid item container className="border-b-2 border-pink-200 pb-2" xs={3}>
                                <Grid item xs={6} className="text-right pr-1 pt-2">{r.name}</Grid>
                                <Grid item xs={6} className="pl-2"><Avatar src={r.photo} alt={r.name} /></Grid>
                            </Grid>
                            <Grid item xs={9} className="text-left" alignItems="center">{r.review}</Grid>
                        </Grid>
                    </Paper>

              ))}


        </section>
    )
}