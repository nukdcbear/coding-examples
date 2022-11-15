package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"gopkg.in/yaml.v3"
)

type myData struct {
	Listeningport int
}

func main() {
	// Read the YAML file.
	yamlfile, err := ioutil.ReadFile("config.yaml")
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	c := &myData{}
	err = yaml.Unmarshal(yamlfile, c)
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// Print the result.
	fmt.Printf("%#v\n", c)
	fmt.Printf("listeningport: %d\n", c.Listeningport)
}