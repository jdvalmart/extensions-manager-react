import { Button } from "./Button"


export const Filters = () => {
  return (
    <div>
        <h2 className="dark:text-Neutral-0 text-center text-[2.125rem] font-bold mb-6">Extensions List</h2>
        <div className="flex place-content-between ">
            <Button>All</Button>
            <Button>Active </Button>
            <Button>Inactive </Button>
        </div>
    </div>
  )
}
