import React, { Component } from "react";
import {
  Button,
  PageSection,
  PageSectionVariants,
  Title
} from '@patternfly/react-core';
import { ExclamationCircleIcon, AngleLeftIcon, AngleRightIcon } from '@patternfly/react-icons';
 
class LowVisionAfter extends Component {
  render() {
    return (
      <PageSection variant={PageSectionVariants.light} isFilled={false} className="pf-u-h-100 pf-u-p-0">
        <div className="pf-l-grid pf-u-h-100">
          <div className="pf-l-grid__item pf-m-9-col">
            <div className="pf-l-stack" >
              <div className="pf-l-stack__item pf-u-p-lg">
                <div className="pf-c-alert pf-m-danger pf-m-inline pf-u-mb-lg" aria-label="inline danger alert">
                  <h4 className="pf-c-alert__title">
                    <span className="pf-screen-reader">
                    Danger alert:</span> There are errors in the form.
                  </h4>
                </div>
                <Title headingLevel="h1" size="2xl">New ice cream sundae</Title>
                <div className="pf-c-content">
                  <small className="light-gray">Create a new sundae by selecting what ice cream flavors and toppings to use.</small>
                </div>
              </div>
              <div className="pf-l-stack__item pf-m-fill ice-cream-form  pf-u-p-lg">
                <form  className="pf-c-form">
                  <div className="pf-c-form__group">
                    <label className="pf-c-form__label" htmlFor="form-name">
                      <span className="pf-c-form__label-text">Name</span>
                      <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                    </label>
                    <input 
                      className="pf-c-form-control" 
                      required type="text" 
                      id="form-name" 
                      name="form-name" 
                      aria-describedby="form-helper-1" />
                    <p className="pf-c-form__helper-text pf-m-error" id="form-helper-1">
                      A name is required</p>
                  </div>
                  <div className="pf-c-form__group">
                    <label className="pf-c-form__label" htmlFor="form-desc">
                      <span className="pf-c-form__label-text">Description</span>
                      <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                    </label>
                    <textarea 
                      className="pf-c-form-control" 
                      required 
                      id="form-desc" 
                      name="form-desc" 
                      aria-describedby="form-helper-2" />
                    <p className="pf-c-form__helper-text pf-m-error" id="form-helper-2">
                      A description is required</p>
                  </div>
                  <div className="pf-l-flex pf-u-align-items-flex-start">
                    <div className="pf-m-flex-1">
                      <div className="pf-c-form__group">
                        <label className="pf-c-form__label" htmlFor="form-flavors-available">
                          <span className="pf-c-form__label-text">Available flavors</span>
                        </label>
                        <select 
                          className="pf-c-form-control pf-u-h-initial pf-u-p-sm" 
                          id="form-flavors-available" 
                          name="form-flavors-available" 
                          multiple
                          size={4}
                        >
                          <option>Banana</option>
                          <option>Chocolate</option>
                          <option>Cookies and Cream</option>
                          <option>Pistachio</option>
                          <option>Strawberry</option>
                          <option>Vanilla</option>
                        </select>
                      </div>
                    </div>
                    <div className="button-width">
                      <Button variant="plain" aria-label="Move selection in Available Flavors to Selected Flavors">
                        <AngleRightIcon />
                      </Button>
                      <Button variant="plain" aria-label="Move selection in Selected Flavors to Available Flavors">
                        <AngleLeftIcon />
                      </Button>
                    </div>
                    <div className="pf-m-flex-1">
                      <div className="pf-c-form__group">
                        <label className="pf-c-form__label" htmlFor="form-flavors-selected">
                          <span className="pf-c-form__label-text">Selected flavors</span>
                          <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                        </label>
                        <select 
                          className="pf-c-form-control pf-u-h-initial pf-u-p-sm"
                          id="form-flavors-selected" 
                          name="form-flavors-selected" 
                          aria-describedby="form-helper-3"
                          multiple
                          size={4}
                        >
                          <option disabled>Select an available flavor</option>
                        </select>
                        <p className="pf-c-form__helper-text pf-m-error" id="form-helper-3">
                          At least one flavor is required.</p>
                      </div>
                    </div>
                  </div>
                  <div className="pf-l-flex pf-u-align-items-flex-start">
                    <div className="pf-m-flex-1">
                      <div className="pf-c-form__group">
                        <label className="pf-c-form__label" htmlFor="form-toppings-available">
                          <span className="pf-c-form__label-text">Available toppings</span>
                        </label>
                        <select 
                          className="pf-c-form-control pf-u-h-initial pf-u-p-sm" 
                          id="form-toppings-available" 
                          name="form-toppings-available" 
                          multiple
                          size={4}
                        >
                          <option>Caramel</option>
                          <option>Cookie crumbles - chocolate</option>
                          <option>Cookie crumbles - vanilla</option>
                          <option>Hot fudge</option>
                          <option>Peanuts</option>
                          <option>Strawberry sauce</option>
                        </select>
                      </div>
                    </div>
                    <div className="button-width">
                      <Button variant="plain" aria-label="Move selection in Available Toppings to Selected Toppings">
                        <AngleRightIcon />
                      </Button>
                      <Button variant="plain" aria-label="Move selection in Selected Toppings to Available Toppings">
                        <AngleLeftIcon />
                      </Button>
                    </div>
                    <div className="pf-m-flex-1">
                      <div className="pf-c-form__group">
                        <label className="pf-c-form__label" htmlFor="form-toppings-selected">
                          <span className="pf-c-form__label-text">Selected toppings</span>
                          <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                        </label>
                        <select 
                          className="pf-c-form-control pf-u-h-initial pf-u-p-sm"
                          id="form-toppings-selected" 
                          name="form-toppings-selected" 
                          aria-describedby="form-helper-3"
                          multiple
                          size={4}
                        >
                          <option disabled>Select an available topping</option>
                        </select>
                        <p className="pf-c-form__helper-text pf-m-error" id="form-helper-3">
                          At least one flavor is required.</p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="pf-l-stack__item ice-cream-form-footer  pf-u-p-lg">
                <Button variant="primary">Add New Sundae</Button>{` `}
                <Button variant="secondary">Cancel</Button>
              </div>
            </div>
          </div>
          <aside className="pf-l-grid__item pf-m-3-col">
            <div className="card-how-to pf-c-card pf-u-h-100">
              <h1 className="pf-c-card__header pf-c-title pf-m-md">
                How to test
              </h1>
              <div className="pf-c-card__body">
                TODO: associate submit button with form, check that colors are correct contrast (both before and after)<br />
                This page has several accessibility issues present. Look for them using the following methods.
                <Title headingLevel="h2" size="lg" className="pf-u-mt-lg">
                  Meaningful color
                </Title>
                Review the design to look for instances of color that are meaningful and not accompanied by text or icon.
                <Title headingLevel="h2" size="lg" className="pf-u-mt-lg">
                  Color contrast
                </Title>
                Description of how to check color contrast
                <Title headingLevel="h2" size="lg" className="pf-u-mt-lg">
                  Scalable
                </Title>
                Description of how to zoom in.
              </div>
            </div>
          </aside>
        </div>
      </PageSection>
    );
  }
}
 
export default LowVisionAfter;