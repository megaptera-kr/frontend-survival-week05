import Category from "./Category";

type CateogoriesProps = {
    categories: string[];
    setFilterCategory: (text: string) => void;
}

export default function Categories({
    categories, setFilterCategory,
}: CateogoriesProps) {
    return (
        < ul style={{
            display: 'flex',
            padding: 0,
            listStyle: 'none',
        }}

        >
            {
                ['전체', ...categories].map((category: string) => (

                    <Category key={category}
                        category={category}
                        setFilterCategory={setFilterCategory}
                    />
                ))
            }
        </ul >
    );
}