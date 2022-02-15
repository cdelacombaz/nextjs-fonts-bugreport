module.exports = {
    async headers() {
        return [
            {
                source: "/fonts/Caveat-VariableFont_wght.woff2",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },
}
