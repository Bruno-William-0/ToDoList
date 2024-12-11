import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "../Nav";

interface Props
{
    children: React.ReactElement
}
export default function Layout(props: Props)
{
const { children } = props
return(
    <>
<Grid className="grid" templateColumns='1fr 1fr 1fr 1fr 1fr' templateRows='64px auto 64px' gap={3}> 
<GridItem colSpan={5} rowSpan={3}>
<Nav></Nav>
</GridItem>
<GridItem colSpan={5} rowSpan={1} colStart={2} colEnd={5}>
{children}
</GridItem>
<GridItem colSpan={5} rowSpan={3}>

</GridItem>
</Grid>
</>
)

}