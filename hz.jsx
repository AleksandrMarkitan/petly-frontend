{/* <RadioBtnWrap>
							<LabelRadioBtn category={category} value={"lost-found"}>
								<InputRadio type="radio" name="category" value="lost-found" onChange={radioBtnHandlder} />
								lost-found
							</LabelRadioBtn>
							<LabelRadioBtn category={category} value={"in-good-hands"}>
								<InputRadio type="radio" name="category" value="in-good-hands" onChange={radioBtnHandlder} />
								in good hands
							</LabelRadioBtn>
							<LabelRadioBtn category={category} value={"sell"}>
								<InputRadio type="radio" name="category" value="sell" onChange={radioBtnHandlder} />
								sell
							</LabelRadioBtn>
						</RadioBtnWrap> */}

{/* <Label htmlFor="birth">
								Date of birth
							</Label>
							<DateInput isValidDate={validDate}
							 inputProps={{ readOnly: true, id: "birth", 
							 placeholder: "Choose date" }} 
							 value={birthdate} 
							 onChange={birthdateHandler} 
							 timeFormat={false} closeOnSelect={true} dateFormat="DD.MM.YYYY" />
							 */}

{/* <Label>The sex</Label>
						<SexRadioWrap>
							<RadioSexLabel sex={sex} value={"male"}>
								<InputRadio type="radio" name="sex" value="male" onChange={radioBtnHandlder} />
								<MaleIcon />
								Male
							</RadioSexLabel>
							<RadioSexLabel sex={sex} value={"female"}>
								<InputRadio type="radio" name="sex" value="female" onChange={radioBtnHandlder} />
								<FemaleIcon />
								Female
							</RadioSexLabel>
						</SexRadioWrap> */}

{/* <LocationWrap>
							<Label>
								Location
								{location &&
									<>
										<InputField autoComplete="off" type="text"
										 value={location} name="location" />
										<ClearBtn type="button" onClick={clearLocation}><RemoveIcon /></ClearBtn>
									</>
								}
								{!location && <InputField name="city" islistopen={cityQuery} autoComplete="off" type="text" onChange={debouncedChangeHandler} placeholder="Start typing a city" />}
							</Label>
							{cityQuery && filteredCities.length > 0 && <CitiesList onClick={locationHandler}>{filteredCities.map(({ _id, city, admin_name }) => {
								return <CitiesItem key={_id}>{city}, {admin_name}</CitiesItem>
							})}</CitiesList>}
							{filteredCities.length === 0 && <div>There isn't such a city</div>}
						</LocationWrap> */}