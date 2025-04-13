import './Home.css'
import { Card, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const Home = () => {
    interface Person {
        id:number,
        name:string 
    }

    const people: Person[] = [
        {id:123, name:"JohnDoe"},
        {id:1234, name:"JaneDoe"}
    ];

    return(
        <div className='container'>
            <Card className='card'>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Name</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                people.map(person => (
                                    <TableRow key={person.id}>
                                        <TableCell>{person.id}</TableCell>
                                        <TableCell>{person.name}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
            
        </div>
    )
}

export default Home;