class EditableTableController
{
    constructor(NgTableParams)
    {
        this.NgTableParams = NgTableParams;
    }

    async onClickRow(row)
    {
        if (this.clickRowCallback)
        {
            await this.clickRowCallback(row[this.primaryKey]);
        }
        this.updateView();
    }

    deleteRow(row)
    {
        if (confirm(`Delete "${row[this.primaryKey]}"?`))
        {
            this.dataset = this.dataset.filter(r => r[this.primaryKey] !== row[this.primaryKey]);
            if (this.deleteRowCallback)
            {
                this.deleteRowCallback(row[this.primaryKey]);
            }
            this.updateView();
        }
    }

    updateView()
    {
        this.tableParams.settings().dataset = this.dataset;
        this.tableParams.reload();
    }

    $onChanges()
    {
        var tableParameters = {}
        if (!this.paging)
        {
            tableParameters.count = Infinity;
        }

        this.tableParams = new this.NgTableParams(tableParameters, { dataset: this.dataset, filterOptions: { filterComparator: this.filterComparator } });
        this.ngTableColumns = this.columns.map(
            column => {
                let filter = {};
                filter[column.name] = "text";
                return {
                    field: column.name,
                    title: column.label,
                    sortable: column.name,
                    filter: column.searchable ? filter : null,
                    show: true
                }
            }
        );        
        this.ngTableColumns.push({ dataType: "command" });
    }

    filterComparator(actual, expected)
    {
        return actual.search(expected) === 0;
    }
}

app.component(
    "editableTable",
    {
        controller: EditableTableController,
        controllerAs: "controller",
        templateUrl: "editable-table/editable-table.html",
        bindings: {
            dataset: "=",
            columns: "<",
            primaryKey: "<",
            clickRowCallback: "<",
            deleteRowCallback: "<",
            paging: "<"
        },
        transclude: true
    }
);