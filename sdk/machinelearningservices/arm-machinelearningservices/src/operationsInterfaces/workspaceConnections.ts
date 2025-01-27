/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  WorkspaceConnection,
  WorkspaceConnectionsListOptionalParams,
  WorkspaceConnectionsCreateOptionalParams,
  WorkspaceConnectionsCreateResponse,
  WorkspaceConnectionsGetOptionalParams,
  WorkspaceConnectionsGetResponse,
  WorkspaceConnectionsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a WorkspaceConnections. */
export interface WorkspaceConnections {
  /**
   * List all connections under a AML workspace.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    workspaceName: string,
    options?: WorkspaceConnectionsListOptionalParams
  ): PagedAsyncIterableIterator<WorkspaceConnection>;
  /**
   * Add a new workspace connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param connectionName Friendly name of the workspace connection
   * @param parameters The object for creating or updating a new workspace connection
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    parameters: WorkspaceConnection,
    options?: WorkspaceConnectionsCreateOptionalParams
  ): Promise<WorkspaceConnectionsCreateResponse>;
  /**
   * Get the detail of a workspace connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsGetOptionalParams
  ): Promise<WorkspaceConnectionsGetResponse>;
  /**
   * Delete a workspace connection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName Name of Azure Machine Learning workspace.
   * @param connectionName Friendly name of the workspace connection
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    connectionName: string,
    options?: WorkspaceConnectionsDeleteOptionalParams
  ): Promise<void>;
}
