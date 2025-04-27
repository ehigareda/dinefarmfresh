// interface MyComponentProps {
//     name: string;
//     // whatever else here
//   }
  
//   function MyComponent({name}: MyComponentProps) {
//     // rendering logic here
//   }
interface cardProps{
    item: { name: string; description: string; price: string};
}

export default function Card({ item }:cardProps){
    return(
        <div className="bg-orange-100 p-4 rounded-lg shadow-lg flex flex-col items-center">
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
        </div>
    )
    
}