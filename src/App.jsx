import { Container, Title, Text, Grid } from '@mantine/core'
import Header from './components/Header'
import Classcard from './components/Classcard'
import Footer from './components/Footer'
import Weekday from './components/Weekday'
import { classes } from './data/classes'
import './App.css'

function App() {
 return (
   <div className="App">
     <Header />

   <Container size="xl" py="xl">
       {/* Add WeekDay component here */}
       <Weekday />

       <Title order={2} ta="center" mb="md">My 4 Classes</Title>
       <Text ta="center" c="dimmed" mb="xl">
         Current Quarter
       </Text>

       {/* Grid with responsive columns */}
       <Grid>
         {classes.map((classItem) => (
           <Grid.Col
             key={classItem.id}
             span={{ base: 12, sm: 6, lg: 3 }}
           >
             <Classcard
               {...classItem}
             />
           </Grid.Col>
         ))}
       </Grid>
     </Container>

    {/* Add Footer with props */}
     <Footer
       schoolName="Jefferson Academy Secondary"
       email="ayden.clausen@jajags.com"
     />
   </div>

 )
}

export default App