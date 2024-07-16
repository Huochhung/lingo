import { Button } from "@/components/ui/button"

const ButtonPage = () => {
    return (
        <div className= "p-4 space-y-4 flex flex-col max-w-[200px]">
            <Button >DEFAULT</Button>
            <Button variant= "primary">PRIMARY</Button>
            <Button variant= "primaryOutline">PRIMARY OUTLINE</Button>
            <Button variant= "secondary">SECONDARY</Button>
            <Button variant= "secondaryOutline">SECONDARY OUTLINE</Button>
            <Button variant= "danger">Danger</Button>
            <Button variant= "dangerOutline">Danger OUTLINE</Button>
            <Button variant= "super">SUPER</Button>
            <Button variant= "superOutline">SUPER OUTLINE</Button>
            <Button variant= "ghost">GHOST</Button>
            <Button variant= "sidebar">Sidebar</Button>
            <Button variant= "sidebarOutline">SIDEBAR OUTLINE</Button>
        </div>
    );
};

export default ButtonPage;