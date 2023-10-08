import NavBar from "../components/navBar/NavBar";

type routesIndexArray = Array<{ path: string, element: React.JSX.Element}>;

const routesIndex: routesIndexArray = [
    {
        path: '/',
        element: <NavBar />,
    },
    {
        path: '/projects',
        element: <NavBar />,
    },
    {
        path: '/about',
        element: <NavBar />
    }
];

export default routesIndex;