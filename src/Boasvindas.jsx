import React from "react";
import { Box, Button, Typography, Container, Stack } from "@mui/material";

    function Boasvindas({ onEnter, onSignUp }) {
    return (
        <Box
        sx={{
            minHeight: "100vh",
            backgroundColor: "#f7f7f7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            p: 2,
        }}
        >
        <Container maxWidth="sm">
            {/* Logo */}
            <Box sx={{ mb: 4 }}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Duolingo_logo.png"
                alt="Logo"
                style={{ width: "150px" }}
            />
            </Box>

            {/* Texto principal */}
            <Typography variant="h4" fontWeight="bold" gutterBottom>
            O jeito grátis, divertido e eficaz de aprender sobre finanças!
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
            Comece agora a melhorar seu conhecimento financeiro com exercícios práticos.
            </Typography>

            {/* Botões */}
            <Stack spacing={2} sx={{ mt: 4 }}>
            <Button
                variant="contained"
                sx={{ backgroundColor: "#7ac70c", fontWeight: "bold", py: 1.5 }}
                onClick={onSignUp}
            >
                Cadastre-se
            </Button>
            <Button
                variant="outlined"
                sx={{ color: "#0077ff", borderColor: "#0077ff", fontWeight: "bold", py: 1.5 }}
                onClick={onEnter}
            >
                Já tenho uma conta
            </Button>
            </Stack>
        </Container>
        </Box>
    );
    }

    export default Boasvindas;
