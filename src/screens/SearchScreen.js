import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [searchApi, result, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return result.filter((res) => {
      return res.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          result={filterResultsByPrice("£")}
          title='Cost Effective'
        />
        <ResultsList result={filterResultsByPrice("££")} title='Bit pricer' />
        <ResultsList
          result={filterResultsByPrice("£££")}
          title='Big Spender!'
        />
        <ResultsList
          result={filterResultsByPrice("££££")}
          title='Most Expensivest!'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
