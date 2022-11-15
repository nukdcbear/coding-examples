package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"gopkg.in/yaml.v3"
)

func main() {
	// Read the YAML file.
	yamlfile, err := ioutil.ReadFile("config.yaml")
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// Unmarshal the YAML into a map.
	var data map[string]interface{}
	err = yaml.Unmarshal(yamlfile, &data)
	if err != nil {
		log.Fatalf("error: %v", err)
	}

	// Print the result.
	for k, v := range data {
		fmt.Printf("%s -> %d\n", k, v)
   }
}