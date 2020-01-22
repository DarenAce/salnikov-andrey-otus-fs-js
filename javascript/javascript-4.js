class MyTree extends HTMLElement {
    connectedCallback() {
        const tree = JSON.parse(this.dataset.tree);
        this.id = tree.id;
        this.appendChild(document.querySelector("#tree").content.cloneNode(true));
        this.querySelector(".id").innerHTML = this.id;
        const children = this.querySelector(".children");
        tree.items.forEach(element => {
            const child = Array.isArray(element.items) && element.items.length > 0 ? new MyTree() : new MyLeaf();
            child.dataset.tree = JSON.stringify(element);
            children.appendChild(child);
        });
    }
}

class MyLeaf extends HTMLElement {
    connectedCallback() {
        const tree = JSON.parse(this.dataset.tree);
        this.id = tree.id;
        this.appendChild(document.querySelector("#leaf").content.cloneNode(true));
        this.querySelector(".id").innerHTML = this.id;
    }
}

customElements.define("my-tree", MyTree);
customElements.define("my-leaf", MyLeaf);

const treeContainers = document.querySelectorAll(".tree-container");
treeContainers.forEach(container => {
    const shadowRoot = container.attachShadow({mode: "open"});
    
    const styles = document.querySelector("#styles");
    shadowRoot.appendChild(styles.content.cloneNode(true));
    
    const treeRoot = new MyTree();
    treeRoot.dataset.tree = container.dataset.tree;
    shadowRoot.appendChild(treeRoot);
});