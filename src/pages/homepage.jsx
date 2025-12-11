import { Container, Title, Text, Grid } from '@mantine/core'
import Classcard from './components/Classcard'
import Weekday from './components/Weekday'
import { classes } from './data/classes'

function Homepage() {
 return (
   <Container size="xl" py="xl">
     <Weekday />

     <Title order={2} ta="center" mb="md">My 4 Classes</Title>
     <Text ta="center" c="dimmed" mb="xl">
       Current Quarter
     </Text>

     <Grid>
       {classes.map((classItem) => (
         <Grid.Col
           key={classItem.id}
           span={{ base: 12, sm: 6, lg: 3 }}
         >
           <ClassCard {...classItem} />
         </Grid.Col>
       ))}
     </Grid>
   </Container>
 )
}

export default Homepage