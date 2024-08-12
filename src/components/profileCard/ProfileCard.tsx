import { Card, Avatar, CardContent, Typography, Box, IconButton } from "@mui/material";
import InstragramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';
import React from "react";

interface ProfileCardProps {
    name: string;
    jobTitle: string;
    photoUrl: string;
    email: string;
    istagramLink: string;
    githubLink: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, jobTitle, photoUrl, email, istagramLink: instagramLink, githubLink }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 2,
                height: '100%',
                minWidth: '450px'
            }}
        >
            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                <Avatar
                    alt={name}
                    src={photoUrl}
                    sx={{ width: 100, height: 100 }}
                    slotProps={{ img: { loading: 'lazy' } }}
                />
            </Box>
            <CardContent>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {jobTitle}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {email}
                </Typography>
                <IconButton href={instagramLink} target="_blank">
                    <InstragramIcon />
                </IconButton>
                <IconButton href={githubLink} target="_blank">
                    <GithubIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default ProfileCard;