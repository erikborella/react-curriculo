import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";

interface ProjectCardProps {
    title: string;
    imageUrl: string;
    description: string;
    githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({title, imageUrl, description, githubLink}) => {
    return (
        <Card variant='outlined' sx={{ display: 'flex', flexDirection: 'column', height: '100%'}}>
            <CardMedia 
                component='img'
                height={140}
                image={imageUrl}
                alt={title}
            />
            <Box display='flex' flex={1} flexDirection='column' justifyContent='space-between'>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign='justify'>
                        {description}
                    </Typography>
                </CardContent>
                <Box display='flex' justifyContent='flex-end' padding={2}>
                    <IconButton href={githubLink} target='_blank' aria-label="github link">
                        <GitHubIcon />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    )
};

export default ProjectCard