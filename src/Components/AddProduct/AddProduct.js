import React from 'react';

const AddProduct = () => {
    return (
        <section className="container py-5">

            <h2 className="text-center py-3">Add Your Product</h2>

            <form class="row g-3 w-50 m-auto">
                <div class="">
                    <label for="productTitle" class="form-label">Product Title</label>
                    <input type="text" class="form-control mb-3" id="productTitle" placeholder="Enter title Here"/>
                
                    <label for="description" class="form-label">Product description</label>
                    <textarea type="text" class="form-control mb-3" id="description" placeholder="Product Description" rows="3" />
                    
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Upload image</label>
                        <input class="form-control mb-3" type="file" id="formFileMultiple" multiple />
                    </div>

                    <h3>Product Variants</h3>
                    <p>This products has multiple options, like different sizes or colors. </p>
                    <button className="btn btn-secondary mb-3">Add Variant Options</button>
                    
                    <br/>

                    <label for="seoTitle" class="form-label">SEO Meta Details</label>
                    <input type="text" class="form-control" id="seoTitle" placeholder="SEO Title"/> <br/>
                    <textarea type="text" class="form-control" id="seoDescription" placeholder="SEO Description" rows="3" />
    
                </div>
                <div className="d-flex justify-content-between">
                    <button type="submit" class="btn btn-primary">Add Product</button>
                    <button type="submit" class="btn btn-primary">Back to Home</button>
                </div>
            </form>
        </section>
    );
};

export default AddProduct;