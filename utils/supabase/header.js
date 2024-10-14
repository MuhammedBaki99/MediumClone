const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9keWttbnV0bXNscndxc3dsbnFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxOTkxOTUsImV4cCI6MjA0Mzc3NTE5NX0.qgDe0n7V8decSAcOPPWZsJe4aBVRVD6OgmtoDb0UVRo"


export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}