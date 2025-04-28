import Card from './card';

interface sectionProps{
    title: string;
    items: {id:string; name: string; description: string; price: string}[]
}

export default function Section({title, items}: sectionProps){
    return(
        <div className="mb-6">
            <div className="text-center font-semibold text-2xl mb-4"> {title} </div>
                <div className="grid grid-cols-3 gap-4">
                    {items.map((item)=> (
                    <Card key={item.id} item={item}/>
                    ))}
                </div>
        </div>
    )
}