import React, {useState} from 'react'

import { Redirect, useParams } from 'react-router'

const updatedetail = {
    projecttitle: "",
    clientname: "",
    clientsoption: "",
  };

const Project = () => {

    const {id}  = useParams() 

    // Modal state
    const [openProject, setOpenProject] = useState(false)

    // Add new project state
    const [query, setquery] = React.useState(updatedetail);
    
    // const {loginAuth} = useSelector((state) => state.login, shallowEqual)
    const handlechangedetail = (e) => {
        const { name, value, type, checked } = e.target;
        let val = type === "checkbox" ? checked : value;
        setquery({
            ...query,
            [name]: val
        });
        };

    // const dispatch = useDispatch();

    const split = (value) => {
        var str = "";
        for (var i = 0; i < value.length; i++) {
        if (value[i] !== " ") {
            str += value[i];
        }
        }
        return str;
    };

    const handleaddproject = () => {
        let payload = {
            id: id,
            projecttitle: split(query.projecttitle),
            clientname: query.clientname,
            clientsoption: query.clientsoption,
            projects: projects,
            clients: clients
        };
        dispatch(projectaddfunction(payload));
        setquery(updatedetail);
        };

    // return loginAuth ? 
   

export { Project }
