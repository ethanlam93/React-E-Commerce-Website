import React from "react";
import CollectionsOverview from "../../components/collection-overview/collections-overview.component.js";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component.jsx";
const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
