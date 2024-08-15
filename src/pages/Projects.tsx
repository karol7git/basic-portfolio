import { SyntheticEvent, useState } from "react";
import gif from "../assets/gif.gif";
import logo from "../assets/logo.png";
import { PropTypes, Tabs, Tab, Box } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const projects = [
  {
    title: "Lorem Ipsum Dolor",
    description: "Lorem Ipsum Dolor Lorem Ipsum Dolor",
    imgUrl: gif,
  },
  {
    title: "Lorem Ipsum Dolor",
    description: "Lorem Ipsum Dolor Lorem Ipsum Dolor",
    imgUrl: logo,
  },
  {
    title: "Lorem Ipsum Dolor",
    description: "Lorem Ipsum Dolor Lorem Ipsum Dolor",
    imgUrl: gif,
  },
  {
    title: "Lorem Ipsum Dolor",
    description: "Lorem Ipsum Dolor Lorem Ipsum Dolor",
    imgUrl: logo,
  },
];
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Projects = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <section className="project">
      <h2>Projects</h2>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {projects.map((project, index) => {
            return <p>{project.title}</p>;
          })}
        </CustomTabPanel>
      </Box>
    </section>
  );
};
export default Projects;
